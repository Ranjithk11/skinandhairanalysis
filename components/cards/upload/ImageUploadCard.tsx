import {
  CircularProgress,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  useGetSignedUploadUrlMutation,
  useGetUploadImageInfoMutation,
} from "@/redux/api/analysisApi";
import { useSession } from "next-auth/react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import _ from "lodash";

interface ImageUploadCardProps {
  title: string;
  uploadControlKey: string;
}

const StyledImageUploadCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: 10,
  position: "relative",
  overflow: "visible",
  "& .info_content_wraper": {
    width: "100%",
    height: 200,
    [theme.breakpoints.only('xs')]:{
      height: 170
    },
    border: `3px dotted ${theme.palette.divider}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: 40,
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.secondary,
      fontWeight: 600,
    },
  },
  "& .loader_wraper": {
    width: "100%",
    height: 200,
    [theme.breakpoints.only('xs')]:{
      height: 170
    },
    border: `3px dotted ${theme.palette.divider}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: 40,
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.secondary,
      fontWeight: 600,
    },
  },
  "& .display_image_wrapper": {
    width: "100%",
    height: 200,
    [theme.breakpoints.only('xs')]:{
      height: 170
    },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  "& .camIcon": {
    position: "absolute",
    right: 10,
    bottom: 10,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: "100%",
    border: `2px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.common.white,
  },
}));

const ImageUploadCard = ({ title, uploadControlKey }: ImageUploadCardProps) => {
  const refAccessFiles = useRef<HTMLInputElement>(null);
  const [actionType, setActionType] = useState<string>("CAMERA");
  const [openModel, setOpenModel] = useState<boolean>(false);
  const { data: session, update } = useSession();
  const [
    getSignedUploadUrl,
    {
      isLoading: isLoadingGetSignedUploadUrl,
      isError: isErrorGetSignedUploadUrl,
    },
  ] = useGetSignedUploadUrlMutation();
  const [
    getUploadImageInfo,
    { data: dataImageInfo, isLoading: isLoadingImageInfo },
  ] = useGetUploadImageInfoMutation();

  // Convert File to Base 64
  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // Convert Base 64 to File
  const handleConvertBase64toJpeg = (
    base64String: string,
    filename: string
  ) => {
    if (base64String.startsWith("data:")) {
      var arr: any = base64String.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var file = new File([u8arr], filename, { type: "image/jpeg" });
      return Promise.resolve(file);
    }
    return fetch(base64String)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, { type: "image/jpeg" }));
  };

  // Handle File Upload
  const handleUploadFiles = async (event: any) => {
    let file = event?.target?.files[0];
    try {
      const getSignedUrl: any = await getSignedUploadUrl({
        fileName: `${Date.now()}.jpeg`,
        contentType: "image/jpeg",
        userId: session?.user?.id as string,
      });

      if (getSignedUrl?.data?.data) {
        const fileName = getSignedUrl?.data?.data?.fileName;
        let updatedFile: File = new File([file], fileName, {
          type: file?.type,
        });
        if (file?.type !== "image/jpeg") {
          let base64 = (await toBase64(file)) as string;
          updatedFile = await handleConvertBase64toJpeg(base64, fileName);
        }
        const axiosResponse = axios.put(
          getSignedUrl?.data?.data?.url,
          updatedFile,
          {
            headers: {
              "Content-Type": "image/jpeg",
            },
            onUploadProgress(progressEvent: any) {
              const { loaded, total } = progressEvent;
              if (total) {
                let percent = Math.floor((loaded * 100) / total);
                if (percent <= 100) {
                  console.log(percent);
                }
              }
            },
          }
        );
        const _res = await axiosResponse;
        if (_res) {
          update({
            ...session,
            user: {
              ...session?.user,
              [`${uploadControlKey}`]: _res?.config?.data?.name,
              [`${uploadControlKey}+Path`]: _res?.config?.url,
            },
          });
        }
      }
    } catch (error) { }
  };

  useEffect(() => {
    if (session?.user) {
      const user: any = session?.user;
      if (!_.isEmpty(user[`${uploadControlKey}`])) {
        getUploadImageInfo({
          fileName: user[`${uploadControlKey}`] as string,
          userId: session?.user?.id as string,
        });
      }
    }
  }, [session?.user]);

  return (
    <StyledImageUploadCard>
      {dataImageInfo?.data?.url &&
        !isLoadingGetSignedUploadUrl &&
        !isLoadingImageInfo && (
          <Box
            component="div"
            className="display_image_wrapper"
            sx={{ backgroundImage: `url(${dataImageInfo?.data?.url})` }}
          ></Box>
        )}
      {!dataImageInfo?.data?.url &&
        (isLoadingGetSignedUploadUrl || isLoadingImageInfo) && (
          <Box component="div" className="loader_wraper">
            <CircularProgress />
            <Box mt={3}>
              <Typography variant="caption" textAlign="center">
                Please wait ...
              </Typography>
            </Box>
          </Box>
        )}
      {!dataImageInfo?.data?.url &&
        !isLoadingGetSignedUploadUrl &&
        !isLoadingImageInfo && (
          <Box component="div" className="info_content_wraper">
            <IconButton
              onClick={() => {
                setOpenModel(true);
              }}
              size="large"
            >
              <Icon icon="icons8:upload-2" />
            </IconButton>
            <Box>
              <Typography variant="body2" textAlign="center">
                {title}
              </Typography>
            </Box>
          </Box>
        )}
      {dataImageInfo?.data?.url && (
        <Fragment>
          <IconButton
            onClick={() => {
              setOpenModel(true);
            }}
            component="div"
            className="camIcon"
          >
            <Icon icon="icons8:upload-2" />
          </IconButton>
        </Fragment>
      )}
      <input
        ref={refAccessFiles}
        type="file"
        accept="image/*"
        capture={actionType === "CAMERA" ? true : false}
        hidden
        onChange={handleUploadFiles}
      />
      {openModel && (
        <Dialog maxWidth="sm" open={openModel}>
          <DialogContent>
            <Grid container>
              <Grid item xs={12}>
                <Box mb={4}>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        fontWeight={600}
                        align="center"
                        variant="h5"
                        color="primary"
                      >
                        Upload Form
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => setOpenModel(false)}>
                        <Icon icon="mingcute:close-line" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="center"
                item
                xs={12}
              >
                <Grid
                  item
                  xs={6}
                  container
                  flexDirection="column"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton
                      onClick={() => {
                        setActionType("CAMERA");
                        refAccessFiles?.current?.click();
                        setOpenModel(!openModel);
                      }}
                      size="large"
                    >
                      <Icon style={{ fontSize: 60 }} icon="mdi:camera" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography>Camera</Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  container
                  flexDirection="column"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton
                      onClick={() => {
                        setActionType("GALLERY");
                        refAccessFiles?.current?.click();
                        setOpenModel(!openModel);
                      }}
                      size="large"
                    >
                      <Icon
                        style={{ fontSize: 60 }}
                        icon="solar:gallery-wide-broken"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography>Gallery</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </StyledImageUploadCard>
  );
};
export default ImageUploadCard;
