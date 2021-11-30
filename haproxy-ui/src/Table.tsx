import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export function Table() {
  const fetchHaProxyJsonConfig = () => {
    return axios.get("http://10.0.1.2:22002/;json").then((res) => {
      console.log(res);
    });
  };
  const query = useQuery("haproxy-json", fetchHaProxyJsonConfig);

  return <h2>HAProxy table</h2>;
}
