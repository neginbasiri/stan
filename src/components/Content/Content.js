import React from "react";
import styles from "./Content.module.css";
import { TitleBar, Text } from "../../atoms";
import { useFetch } from "../../utils";
import { CardList } from "../../components";

const ENTRIES_NUM = 20;

const Content = ({ titleText, filterName }) => {
  const { response, loading, error } = useFetch();
  let sortedEntries = null;

  if (response) {
    const filteredEntries = response.filter(
      ({ releaseYear, programType }) =>
        releaseYear > 2010 && programType === filterName
    );
    const subSetData = filteredEntries.splice(0, ENTRIES_NUM);
    sortedEntries = subSetData.sort((a, b) =>
      a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
    );
  }
  return (
    <div>
      <TitleBar><Text textStyle="medium">{titleText}</Text></TitleBar>
      <div className={styles.content}>
        {loading && <p>Loading...</p>}
        {error && <p>Oops, Something went wrong...</p>}
        {sortedEntries && <CardList entries={sortedEntries} />}
      </div>
    </div>
  );
};
export default Content;
