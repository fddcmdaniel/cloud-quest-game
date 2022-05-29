import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { useContext } from "react";

import { LaunchContext } from "./types";

interface StartsCheckProps {
  id: number;
  index: number;
}

const StartsCheck = ({ id, index }: StartsCheckProps) => {
  const { user } = useContext(LaunchContext);

  // level 1
  if (id === 1 && user.level1 === 1) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 1 && user.level1 === 2) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 1 && user.level1 === 3) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
    // level 2
  } else if (id === 2 && user.level2 === 1) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 2 && user.level2 === 2) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 2 && user.level2 === 3) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
    // level 3
  } else if (id === 3 && user.level3 === 1) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 3 && user.level3 === 2) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 3 && user.level3 === 3) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
    // level 4
  } else if (id === 4 && user.level4 === 1) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 4 && user.level4 === 2) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 4 && user.level4 === 3) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
    // level 5
  } else if (id === 5 && user.level5 === 1) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 5 && user.level5 === 2) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="rgba(141, 141, 170, 0.7)" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else if (id === 5 && user.level5 === 3) {
    return (
      <>
        <FaStar color="#F7D716" size={20} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
        <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
      </>
    );
  } else {
    return null;
  }
}

export default StartsCheck;