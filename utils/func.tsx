import _ from "lodash";
import { Moment } from "moment";

export const shouldForwardProp = <CustomProps extends Record<string, any>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey
): boolean => !props.includes(prop as string);

export const getGreetingTime = (currentTime: Moment) => {
  if (!currentTime || !currentTime.isValid()) {
    return "Hello";
  }
  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format("HH"));
  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    return "Good afternoon";
  } else if (currentHour >= splitEvening) {
    return "Good evening";
  }
  return "Good morning";
};

export const calculatePercentage = (part: number, whole: number) => {
  if (typeof part !== "number" || typeof whole !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
  const percentage = (part / whole) * 100;
  if (percentage) {
    return Math.ceil(percentage);
  }
  return 0;
};

export const stringReplaceWithWhiteSpace = (
  value: string,
  replaceWith: string
) => {
  if (value) {
    const newValue = value.toLowerCase().replace(/\s/g, replaceWith);
    return newValue;
  }
  return null;
};

export const getInputType = (input: string) => {
  if (input === "STRING") {
    return "text";
  }
  if (input === "NUMBER") {
    return "number";
  }
  if (input === "DATE") {
    return "date";
  }
  return "text";
};

export const getEmojiSentiments = (
  emojiId: string,
  options: any[],
  emojiesData: any[]
) => {
  let emojiSentiments = [];
  let findEmoji = _.find(options, (emoji) => emoji?._id === emojiId);
  if (emojiesData?.length > 0) {
    const _findEmojiById = _.find(
      emojiesData,
      (item) => item?.emojiValue === findEmoji?.optionValue
    );
    if (_findEmojiById) {
      emojiSentiments = _findEmojiById?.sentimentData;
    }
  }
  return emojiSentiments;
};

// getFile name with timestamp
export function getFileNameWithTimeStamp(key: string) {
  let timestamp = new Date().getTime().toString();
  if (key) {
    return key + "_" + timestamp;
  }
  return timestamp;
}

export const isValidateEmail = (input: string) => {
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (pattern.test(input)) {
    return true;
  }
  return "Please enter a valid email address";
};

export const handleConvertBase64toJpeg = (
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
export function  capitalizeWords(str:string) {
  // Convert the entire string to lowercase
  str = str.toLowerCase();

  // Split the string into words
  const words = str.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together
  return capitalizedWords.join(' ');
}
