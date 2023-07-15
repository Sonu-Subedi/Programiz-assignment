import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  console.log(data);

  const [filteredData, setfilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords && keywords.length > 0) {
      const newData = data.filter((d) => {
        return keywords.every((key) => {
          return d.keywords.includes(key);
        });
      });

      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((d) => {
        return <Job key={d.id} data={d} setKeywords={setKeywords} />;
      })}
    </div>
  );
};

export default Jobs;
