"use client";
import React, { useEffect, useState } from "react";
import Uppy, { UploadResult } from "@uppy/core";
import { Dashboard } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import { useSession } from "next-auth/react";
import Webcam from "@uppy/webcam";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";
import "@uppy/image-editor/dist/style.css";
import "@uppy/screen-capture/dist/style.css";
import "@uppy/audio/dist/style.min.css";
import { webcamConfig } from "../../utils/uppyConfig";
import { useGetSignedUploadUrlMutation } from "@/redux/api/analysisApi";
import axios from "axios";

interface FileUploadControlProps {
  uploadPath: string;
  fileName: string;

  onCompleted: (
    result: UploadResult<Record<string, unknown>, Record<string, unknown>>
  ) => void;
}

const FileUploadControl = ({
  uploadPath,
  fileName,
  onCompleted,
}: FileUploadControlProps) => {
  const { data: session, update } = useSession();
  const [uppy] = useState(() =>
    new Uppy({
      allowMultipleUploads: false,
      restrictions: {
        maxNumberOfFiles: 1,
      },
      onBeforeFileAdded: (currentFile, files) => {
        const modifiedFile = {
          ...currentFile,
          name: fileName.replace(".jpeg", ""),
        };
        return modifiedFile;
      },
    })
      .use(Webcam, webcamConfig)
      .use(XHRUpload, {
        endpoint: uploadPath as string,
        method: "PUT",
        fieldName: "file",
        headers: {
          "Content-Type": "image/jpeg",
          "Access-Control-Allow-Origin": "*",
        },
      })
  );
  uppy.on("file-added", (file) => {});
  uppy.on("upload", () => {});
  uppy.on("complete", (result) => {
    console.log(result);
  });

  function handleChange(event: any) {
    var file = event.target.files[0];
    const newFile = new File([file], fileName, { type: file.type });
    axios
      .put(uploadPath, newFile, {
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
      })
      .then((response) => {
        update({
          ...session,
          user: {
            ...session?.user,
            selfyImage: fileName,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
    // <Dashboard
    //   uppy={uppy}
    //   disableLocalFiles={false}
    //   id="uppy-upload"
    //   note="File size must not exceed 20 MB"
    //   plugins={["Webcam"]}
    // />
  );
};

export default FileUploadControl;
