import CancelIcon from '@mui/icons-material/Cancel';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Box, Grid, IconButton, InputLabel } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useSnackbar } from "./snackbar/Snackbar";


type Props = {
  images: File[];
  imageUrls: string[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
};

export const ImageUpload = ({ images, imageUrls, setImages }: Props) => {
  const { showSnackbar } = useSnackbar();
  const [isDroppable, setIsDroppable] = useState<boolean>(false);

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages([...images, ...Array.from(e.target.files)]);
  };

  const handleOnRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleDragEventCanceller = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: any) => {
    handleDragEventCanceller(e);
    const inputFiles = e.dataTransfer.files;

    for (let i = 0; i < inputFiles.length; i++) {
      if (!['image/png', 'image/jpg', 'image/jpeg'].includes(inputFiles[i].type)) {
        showSnackbar('pngまたはjpg形式の画像を指定してください','error');
        return;
      }
    }

    if (inputFiles && inputFiles[0]) {
      setImages([...images, ...inputFiles]);
    }
    setIsDroppable(false);
  };

  const onDragEnter = () => {
    setIsDroppable(true);
  };

  const onDragLeave = () => {
    setIsDroppable(false);
  };

  const PreviewContainer = ({
    idx,
    url,
    removable = false,
  }: {
    idx: number;
    url: string;
    removable?: boolean;
  }) => (
    <Grid item xs={6} sm={3}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100px',
          borderStyle: 'solid',
          borderColor: grey[300],
        }}
      >
        {removable && (
          <IconButton
            aria-label="delete image"
            style={{
              position: 'absolute',
              top: 3,
              right: 3,
              color: '#aaa',
              padding: 0,
              zIndex: 1,
            }}
            onClick={() => handleOnRemoveImage(idx)}
          >
            <CancelIcon />
          </IconButton>
        )}
        <img
          src={url}
          style={{
            maxWidth: '100%',
            maxHeight: '100px',
          }}
        />
      </Box>
    </Grid>
  );

  return (
    <>
      <Box
        sx={{
          borderStyle: 'solid',
          borderColor: grey[300],
          borderRadius: 1,
          '&:hover': {
            borderColor: grey[700],
          },
          marginBottom: 1,
          marginTop: 1,
        }}
        onDrop={handleDrop}
        onDragOver={handleDragEventCanceller}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
      >
        <InputLabel
          sx={{
            backgroundColor: isDroppable ? grey[400] : grey[200],
            borderStyle: 'dashed',
            borderColor: isDroppable ? grey[500] : grey[300],
            py: 2,
            textAlign: 'center',
            whiteSpace: 'normal',
            fontSize: {
              md: '14px',
              xs: '12px',
            },
          }}
          htmlFor="imageInput"
        >
          <input
            id="imageInput"
            type="file"
            multiple
            accept=".png,.jpg"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnAddImage(e)}
            style={{ display: 'none' }}
          />
          {/* <FileUploadIcon fontSize="medium" />
          <br /> */}
          ここにファイルをドラッグアンドドロップするか、
          クリックしてファイルを選択してください
        </InputLabel>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={1}>
        {images.length
          ? images.map((item, i) => (
              <PreviewContainer key={i} idx={i} removable url={URL.createObjectURL(item)} />
            ))
          : imageUrls.map((item, i) => (
              <PreviewContainer key={i} idx={i} url={item + '?' + Date.now()} />
            ))}
      </Grid>
    </>
  );
};
