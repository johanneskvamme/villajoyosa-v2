import styled from "@emotion/styled";
import { useState } from "react";
import {
  ColumnsPhotoAlbum,
  RowsPhotoAlbum,
  type Photo,
  type RenderImageContext,
  type RenderImageProps,
} from "react-photo-album";
import { urlFor } from "urlBuilder";
import { Lightbox, type SlideImage } from "yet-another-react-lightbox";
import { DesktopOnly, Header, loader, MobileOnly } from "./common";
import Image from "next/image";

const Center = styled.div`
  display: block;
  margin: auto;
`;

const Width90Centered = styled(Center)`
  width: 90%;
  margin-bottom: 300px;
`;

const BildeHeader = styled(Header)`
  @media screen and (min-width: 1024px) {
    margin-top: 47px;
    margin-bottom: 33px;
    margin-left: 193px;
  }
`;

type Props = {
  images: any[];
};

type PhotoWithBlur = Photo & {
  blurDataUrl?: string;
};

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const renderNextJsImage = (
  imageProps: RenderImageProps,
  { photo, width, height }: RenderImageContext<PhotoWithBlur>,
) => (
  <Image
    src={photo.src}
    alt={photo.alt ?? ""}
    sizes={imageProps.sizes}
    className={imageProps.className}
    style={imageProps.style}
    width={width}
    height={height}
    loader={loader}
    blurDataURL={photo.blurDataUrl}
  />
);

export default function Bilder({ images }: Props) {
  const [index, setIndex] = useState(-1);

  const photos: PhotoWithBlur[] = images.map((img) => {
    const width = Number(img.dimensions.width);
    const height = Number(img.dimensions.height);
    return {
      src: img.url,
      width,
      height,
      blurDataUrl: img.lqip,
      srcSet: breakpoints.map((breakpoint) => {
        const bpHeight = Math.round((height / width) * breakpoint);
        return {
          src: urlFor(img.url).width(breakpoint).height(bpHeight).url(),
          width: breakpoint,
          height: bpHeight,
        };
      }),
    };
  });

  const slides: SlideImage[] = photos.map(({ src, width, height, srcSet }) => ({
    src,
    width,
    height,
    srcSet: srcSet?.map(({ src, width, height }) => ({ src, width, height })),
  }));

  return (
    <>
      <BildeHeader>Bilder</BildeHeader>
      <MobileOnly>
        <ColumnsPhotoAlbum
          photos={photos}
          columns={2}
          onClick={({ index }) => setIndex(index)}
          render={{ image: renderNextJsImage }}
        />
      </MobileOnly>
      <DesktopOnly>
        <Width90Centered>
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={200}
            onClick={({ index }) => setIndex(index)}
            render={{ image: renderNextJsImage }}
          />
        </Width90Centered>
      </DesktopOnly>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
