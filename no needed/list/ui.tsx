import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { $host } from "../../shared/api";
import TableData from "../../shared/tableData/ui";

const List = () => {
  const { data } = useQuery("test", test);

  async function test() {
    const response = await $host.get("api/mainTypeProduct");
    console.log("request", response);
    return response.data;
  }

  const list = css`
    display: grid;
    grid-template-columns: 1fr;
  `;

  useEffect(() => {
    console.log(data);
  });

  return (
    <div css={list}>
      <TableData dataForTable={data} />
    </div>
  );
};

export default List;
