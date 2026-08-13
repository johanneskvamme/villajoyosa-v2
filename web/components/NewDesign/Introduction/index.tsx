import styled from "@emotion/styled";
import {
  DesktopOnly,
  FullwidthImageWrapper,
  loader,
  MobileOnly,
} from "components/NewDesign/common";
import { ImageAtStaticPosition } from "types/local";
import { urlFor } from "urlBuilder";
import IntroductionText from "./IntroductionText";
import RentalButtons from "./RentalButtons";
import Image from "next/image";

const IngressWrapper = styled.section`
  margin: auto 8vw;
  font-size: 2.1rem;

  @media screen and (min-width: 1024px) {
    margin: 0 0 0 5vw;
  }
`;

const FirstViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-top: 138px;
    & > * {
      width: 50%;
    }
  }
`;

const BannerImage = styled(FullwidthImageWrapper)`
  height: 20vh;
  width: 100vw;
  position: relative;
  @media screen and (min-width: 1024px) {
    height: 238px;
  }
`;

const ActionButtonBackgroundImage = styled(FullwidthImageWrapper)`
  height: 190px;
  position: relative;
  @media screen and (min-width: 1024px) {
    width: 90%;
    max-width: 738px;
    height: 347px;
    max-height: 65%;
    margin: 40px auto 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const RoundedBorderImage = styled(Image)`
  @media screen and (min-width: 1024px) {
    border-radius: 17px;
  }
`;

type Props = {
  bannerImage?: ImageAtStaticPosition;
  actionImage?: ImageAtStaticPosition;
};

export default function Introduction({ bannerImage, actionImage }: Props) {
  const bannerImageUrl =
    bannerImage?.image?.imageUrl || "https://picsum.photos/id/1057/1920/747";
  const actionButtonImageUrl =
    actionImage?.image?.imageUrl || "https://picsum.photos/id/163/1920/740";
  return (
    <>
      <BannerImage>
        <Image
          alt={bannerImage?.image?.name ?? ""}
          src={bannerImageUrl}
          fill
          style={{ objectFit: "cover" }}
          loader={loader}
          blurDataURL={bannerImage?.image?.lqip}
          priority
        />
      </BannerImage>
      <FirstViewWrapper>
        <IngressWrapper>
          <IntroductionText />
          <DesktopOnly>
            <RentalButtons />
          </DesktopOnly>
        </IngressWrapper>
        <section>
          <ActionButtonBackgroundImage>
            <RoundedBorderImage
              alt={actionImage?.image?.name ?? ""}
              src={actionButtonImageUrl}
              fill
              style={{ objectFit: "cover" }}
              loader={loader}
              blurDataURL={actionImage?.image?.lqip}
              priority
            />
          </ActionButtonBackgroundImage>
        </section>
      </FirstViewWrapper>
      <MobileOnly>
        <RentalButtons />
      </MobileOnly>
    </>
  );
}
