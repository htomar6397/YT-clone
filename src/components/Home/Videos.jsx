import React, { useEffect,useState } from 'react'
import './Videos.css'
const Videos = () => {
  const [content, setContent] = useState([]);
  //  const [conntents, setConntents] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db6d0cae08mshb08c25a9a0ea6d6p10cc40jsnc77f500e58ff",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
useEffect(()=>{
  fetchContent();
  console.log(content, "hbbbnn");
  // setConntents(content.contents);
},[])
async function fetchContent(){
   await fetch(
     "https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US",
     options
   )
     .then((response) => response.json())
     .then((response) => {
       setContent(response.contents);
       console.log(response);
     })
     .catch((err) => console.error(err));
}
    console.log(content,"hbh");
  return (
    <div className="videolists">
      {content.map((i) => (
        <a 
          style={{ color: "black", textDecoration: "none" }}
          href={`https://www.youtube.com/watch?v=` + i.video.videoId}
        >
          <div className="videowrap">
            <div className="thum">
              <img
                style={{ height: "193px" }}
                src={i.video.thumbnails[3].url}
                alt=""
              />
            </div>
            <div className="logowrap">
              <div className="channellogo">
                <img
                  style={{ height: "35px" }}
                  src={
                    "https://yt3.ggpht.com/aREHHDdDO86m_L-MN81eK5pdwwMUEbnLLkyAdfDyGlgLncUMaUJ2O9zmuoAOCa47c26TMLrF=s88-c-k-c0x00ffffff-no-rj"
                  }
                  alt=""
                />
              </div>
              <div className="titlewrap">
                <div className="title">
                  <span>{i.video.title}</span>
                </div>
                <div className="infoWrap">
                  <div className="chname">
                    <span style={{ fontSize: "14px" }}>
                      RJ Raunak
                      <img
                        style={{
                          transform: "translateY(1px) translateX(4px)",
                          height: "13px",
                        }}
                        src="check.png
                  "
                        alt=""
                      />
                    </span>
                  </div>
                  <div style={{ fontSize: "14px" }} className="info">
                    <span>{i.video.stats.views} views </span>
                    <span
                      style={{
                        transform: "translateY(10px)",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      .
                    </span>
                    <span> {i.video.publishedTimeText}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  ); }
   export default Videos