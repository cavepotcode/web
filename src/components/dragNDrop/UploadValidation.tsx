import React from "react";
import { FileError } from "react-dropzone";
import { FileHeader } from "./FileHeader";

export interface UploadValidationProps {
    file: File;
    onDelete: (file: File) => void;
    errors: FileError[];
}

export function UploadValidation({ file, onDelete, errors }: UploadValidationProps) {
    return <React.Fragment>
        <FileHeader file={file} onDelete={onDelete} progress={-1} />
        {errors.map(error => (
            <div className="error-detail">{error.message}</div>
        ))}
    </React.Fragment>
}