import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-K409L5S2F6");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};