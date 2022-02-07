import { queryHelpers } from "@testing-library/react";
import { useField } from "formik";
import React, { useCallback, useEffect, useState } from "react"
import { FileError, FileRejection, useDropzone } from "react-dropzone"
import { SingleFileUpload } from "./SingleFileUpload";
import { UploadValidation } from "./UploadValidation";
import './FileHeader.scss';

export interface UpleadableFile {
    file: File;
    errors: FileError[];
    url?: string;
}

export function MultipleFileUploadField({ name }: { name: string }) {
    const [_, __, helpers] = useField(name);

    const [files, setFiles] = useState<UpleadableFile[]>([]);

    const onDrop = useCallback((accfiles: File[], rejFiles: FileRejection[]) => {
        const mappedAcc = accfiles.map((file) => ({ file, errors: [] }));
        setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
    }, []);
    
    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop, 
        accept: 'image/*',
        maxSize: 300*1024 // 300KB
     })

    useEffect(() => {
        helpers.setValue(files);
        helpers.setTouched(true);
    }, [files])

    function onDelete(file: File) {
        // setFiles(curr => {
        //     return curr.filter(fw => fw.file !== file)
        // });
        setFiles(curr => curr.filter(fw => fw.file !== file));
    }

    function onUpload(file: File, url: string) {
        setFiles((curr) => curr.map((fw) => {
            if (fw.file === file) {
                return { ...fw, url };
            }
            return fw;
        }));

    }

    return (
        <React.Fragment>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <p className="drag-zone">Drag 'n' drop some files here, or click to select files</p>
                {/* {JSON.stringify(files)} */}
            </div>

            {files.map((fileWrapper, index) => (
                fileWrapper.errors.length ?
                    (<UploadValidation 
                        key={index}
                        file={fileWrapper.file} 
                        onDelete={onDelete}
                        errors={fileWrapper.errors}
                    />)
               :
                    (<SingleFileUpload
                        onDelete={onDelete}
                        onUpload={onUpload}
                        key={index}
                        file={fileWrapper.file}
                    />)
               
            ))}
        </React.Fragment> 
    )
}