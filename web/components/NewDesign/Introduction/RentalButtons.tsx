import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { IoArrowForward, IoChevronDown } from "react-icons/io5";

const ButtonStyle = styled.a`
  text-align: center;
  border: none;
  border-radius: 7px;
  padding: 10px 0px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 5px;
  min-width: 293px;
  transition: filter 0.1s ease-in-out;
  height: fit-content;
  @media screen and (min-width: 1024px) {
    width: fit-content;
    height: min-content;
    padding: 10px 60px;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const MainButton = styled(ButtonStyle)`
  background-color: #ff934f;
  @media screen and (min-width: 1024px) {
    margin: initial;
  }
`;

const SecondaryButton = styled(ButtonStyle)`
  margin: initial;
  background-color: #646881;
  color: white;
  @media screen and (min-width: 1024px) {
  }
`;

const ReadMoreBelow = styled.div`
  width: 100%;
  & > a:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const scrollBaitTextStyle: CSSProperties = {
  fontWeight: "bold",
  margin: "0 auto",
  width: "80%",
  textAlign: "center",
};

const ActionButtonSection = styled.section`
  position: relative;
  top: -40px;
  border-radius: 7px;
  background-color: white;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1024px) {
    position: initial;
    flex-direction: column;
    margin: initial;
    margin-top: 64px;
    margin-bottom: 181px;
    width: fit-content;
  }
`;

const RentalLinkWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: center;
  padding: 21px 15px 0;
  @media screen and (min-width: 1024px) {
    padding: 0;
    width: fit-content;
  }
`;

export default function RentalButtons() {
  return (
    <ActionButtonSection>
      <RentalLinkWrapper>
        <MainButton
          data-splitbee-event="External Link"
          data-splitbee-event-destination="Direkte"
          href="#kontakt-oss"
        >
          Kontakt oss direkte
        </MainButton>
        <SecondaryButton
          data-splitbee-event-destination="Airbnb"
          data-splitbee-event="External Link"
          href="https://www.airbnb.no/rooms/52714065?guests=1&adults=1&s=67&unique_share_id=1182380a-eccb-4dfb-a39d-8e7313984ebe"
          target="_blank"
        >
          Se leiligheten på Airbnb <IoArrowForward />
        </SecondaryButton>
      </RentalLinkWrapper>
      <ReadMoreBelow>
        <a href="#vaar-leilighet" style={scrollBaitTextStyle}>
          Eller les mer om leiligheten her
          <IoChevronDown />
        </a>
      </ReadMoreBelow>
    </ActionButtonSection>
  );
}
