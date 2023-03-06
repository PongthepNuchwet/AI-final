
import { type } from 'os'
import React, { Dispatch, FunctionComponent, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type Prop = {
  setPreviewUrl: any;
  setFile:any ;
}

export default function Dropzone({ setPreviewUrl ,setFile}: Prop) {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles)
    setPreviewUrl(acceptedFiles.map((file:any) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const binaryStr = reader.result
      setFile(binaryStr)
    }
    reader.readAsArrayBuffer(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    multiple: false,
    onDrop
  })



  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>{`Drag 'n' drop some files here, or click to select files`}</p>
      }
    </div>
  )
}
