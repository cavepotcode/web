
import './FileHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export interface FileHeaderProps{
    file: File;
    onDelete: (file: File) => void;
    progress: number;
}

export function FileHeader({file, onDelete, progress} : FileHeaderProps){
    return (
    <div className="file-wrapper">
        <p>{file.name}</p>
        <div className='icons-wrapper'>
            <FontAwesomeIcon icon={faCheck} className={progress < 0 ? 'load-error' : progress == 100 ? 'load-done': 'load-wait'} />
            <button onClick={ () => onDelete(file)}> X </button>
        </div>
    </div>
    );
}