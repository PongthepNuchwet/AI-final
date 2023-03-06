"use client"

import { useEffect, useState } from 'react'
import Dropzone from './Dropzone'
import Image from 'next/image';
import fs from 'fs'
import axios from 'axios';

type RequestInit = {
  method: string;
  formData: FormData;
}

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState<any | null>(null)
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    async function fetchData() {
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'Content-Type',
       },
       mode: 'no-cors',
      }
      let respone = await axios.get("https://2451-35-231-101-139.ngrok.io/a",config);
      console.log("ngrok: ",respone)
      // const response = await fetch("/api/hello", {
      //   method: "GET",
      // });
      // console.log(response)
    }
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl == null) return;
      previewUrl.forEach((file: any) => URL.revokeObjectURL(file.preview))
      setPreviewUrl(null)
      setFile(null)
    };
  }, []);



  const uploadToServer2 = async (event: any) => {
    if (file == null) { console.log(file); return };
    console.log(file)

    const form = new FormData();
    form.append("picture", new Blob([file]),previewUrl[0].path);


    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    const endpoint = 'https://2451-35-231-101-139.ngrok.io/upload'

    const response = await axios.post(endpoint, form, config);

    console.log('response', response.data);
  };


  return (
    <div>
      <Dropzone setPreviewUrl={setPreviewUrl} setFile={setFile} />
      {previewUrl !== null ?
        <Image
          width={600}
          height={600}
          src={previewUrl[0].preview}
          alt="Picture of the author"
          onLoad={() => { URL.revokeObjectURL(previewUrl[0].preview) }}
        />
        : "not image"}
      <button onClick={uploadToServer2}>upload</button>
    </div>
  )
}
