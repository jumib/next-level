"use client";
import data from "../../json/initialPage.json";

interface Data {
  title: string;
  subTitle: string;
  link: string;
}
export default function RightBar() {
  return (
    <>
      <div className="right-width">
        <ul>
          <li>목차</li>
          {data.map((item: Data, idx: number) => {
            return idx > 0 && <li key={item.link}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
