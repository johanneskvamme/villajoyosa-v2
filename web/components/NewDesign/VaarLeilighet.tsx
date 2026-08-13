/* Vår leilighet  */

import styled from "@emotion/styled";
import { ImageAtStaticPosition } from "types/local";
import { FullwidthImageWrapper, Header, loader } from "./common";
import Image from "next/image";

export const VaarLeilighetHeader = styled(Header)`
  margin-top: 0;
  @media screen and (min-width: 1024px) {
    margin-top: 47px;
    margin-bottom: 33px;
    margin-left: 193px;
  }
`;

const InnholdsText = styled.p`
  margin-left: 34px;
  margin-bottom: 28px;
  margin-right: 24px;
  @media screen and (min-width: 1024px) {
    margin-left: 134px;
    width: 60%;
  }
`;

const VaarLeilighetImage = styled(FullwidthImageWrapper)`
  height: 170px;
  object-position: center;
  position: relative;
  @media screen and (min-width: 1024px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: block;
    margin-left: 134px;
    width: 70%;
    margin-top: 76px;
    height: 307px;
  }
`;

const RoundedBorderImage = styled(Image)`
  @media screen and (min-width: 1024px) {
    border-radius: 8px;
  }
`;

type Props = {
  image?: ImageAtStaticPosition;
};

export default function VaarLeilighet({ image }: Props) {
  const imageUrl =
    image?.image?.imageUrl || "https://picsum.photos/id/225/1920/170";
  return (
    <section>
      <VaarLeilighetHeader id="vaar-leilighet">
        Vår leilighet
      </VaarLeilighetHeader>
      <InnholdsText>
        Vi leier ut en penthouse-leilighet i 14. etasje med utsikt over
        Middelhavet og byen Villajoysa. Med glassfasade ut mot den luftige
        takterrassen får du sol mesteparten av dagen. Leiligheten ligger på
        toppen av bygården &quot;Torre Colon&quot;, som betyr Columbus-tårnet.
        Den ligger sentralt i gaten Calle Colon, med knappe 5 minutter å gå til
        stranda. Der kan man leie solseng og parasoll hele dagen, til kl. 19 om
        kvelden.
      </InnholdsText>
      <VaarLeilighetImage>
        <RoundedBorderImage
          alt={image?.image?.name ?? ""}
          src={imageUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          loader={loader}
          blurDataURL={image?.image?.lqip}
        />
      </VaarLeilighetImage>
    </section>
  );
}
