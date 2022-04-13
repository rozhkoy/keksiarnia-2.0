import { css } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import React, { useEffect, useState } from "react";
import { sendPicturesMainCategory } from "../../store/adminStore/categoriesPicturesStore";
import {
  fetchMainTypeDataByID,
  rewriteMainTypeData,
  sendMainTypeDate,
} from "../../store/adminStore/mainTypeStore";
// import {fetchIsActiveData} from "../../store/adminStore/isActiveStore";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const layoutItem = css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    margin: 10px;
    grid-gap: 15px;
  `;

  const label = css`
    grid-column: 1/3;
    text-align: end;
  `;

  const button = css`
    grid-column: 3/13;
    align-self: end;
  `;

  const input = css`
    grid-column: 3/13;
  `;

  const dispatch = useAppDispatch();
  const mainTypeItemData = useAppSelector(
    (state) => state.mainTypeStore.mainTypeItem
  );
  const isActive = useAppSelector((state) => state.isActive);
  const { id } = useParams();
  const [isActiveState, setIsActiveState] = useState<string>("");
  const [fileState, setFileState] = useState<Blob | string>("");
  const [titleState, setTitleState] = useState<string>("");
  const [apiStatusFetchByID, setApiStatusFetchByID] = useState(false);

  function sendData(event: React.SyntheticEvent) {
    console.log(fileState);
    const formData = new FormData();
    formData.append("isActive_ID", isActiveState);
    formData.append("title", titleState);
    formData.append("id", mainTypeItemData.id);
    const formImg = new FormData();
    formImg.append("img", fileState);
    if (formImg.get("img") != "") {
      dispatch(sendPicturesMainCategory(formImg)).then((response) => {
        console.log(response.payload.picture_ID);
        formData.append("picture_ID", response.payload.picture_ID);
        dispatch(rewriteMainTypeData(formData));
      });
    } else {
      console.log("go");
      dispatch(rewriteMainTypeData(formData));
    }
    event.preventDefault();
  }

  function selectOption(event: React.ChangeEvent<HTMLSelectElement>) {
    setIsActiveState(event.target.value);
  }

  function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    files && setFileState(files[0]);
  }

  function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitleState(event.target.value);
  }

  useEffect(() => {
    if (!isActive.apiStatus) {
      // dispatch(fetchIsActiveData())
    }
    if (!apiStatusFetchByID) {
      dispatch(fetchMainTypeDataByID(Number(id)));
      setApiStatusFetchByID(true);
    }
    if (mainTypeItemData) {
      setApiStatusFetchByID(true);
      setIsActiveState(mainTypeItemData.isActive);
      setTitleState(mainTypeItemData.title);
    }
  }, [mainTypeItemData, isActive]);

  return (
    <div>
      <button onClick={() => console.log(isActiveState)}>test</button>
      <form onSubmit={sendData}>
        <div css={layoutItem}>
          <label css={label}>Is Active</label>
          <select onChange={selectOption} value={isActiveState} css={input}>
            {/*{isActive.ActiveData.map((item) => (*/}
            {/*	<option value={item.isActive_ID} key={item.value}>{item.value}</option>*/}
            {/*))}*/}
          </select>
        </div>
        <div css={layoutItem}>
          <label css={label}>Image</label>
          <input onChange={selectFile} css={input} type="file" />
        </div>
        <div css={layoutItem}>
          <label css={label}>Title</label>
          <input
            onChange={changeTitle}
            value={titleState}
            css={input}
            type="text"
            required
          />
        </div>
        <div css={layoutItem}>
          <button type="submit" css={button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
