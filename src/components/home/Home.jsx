import React, { useState } from "react";
import c1 from "../../assets/c1.png";
import arrow from "../../assets/down.png";
import dropup from "../../assets/up.png";
import info from "../../assets/info.png";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/infosub.png";
import sub from "../../assets/sub.png";
import chapters from "../../data/chapters"; // Importing chapter data
import topicsData from "../../data/topics"; // Importing topics and subtopics

const Home = () => {
  const [isOpenChapter, setIsOpenChapter] = useState(null);
  const [isOpenTopic, setIsOpenTopic] = useState(null);

  const handleChapterClick = (chapterId) => {
    setIsOpenChapter((prevChapter) =>
      prevChapter === chapterId ? null : chapterId
    );
    setIsOpenTopic(null);
  };

  const handleTopicClick = (topicId) => {
    setIsOpenTopic((prevTopic) => (prevTopic === topicId ? null : topicId));
  };

  return (
    <div className="flex flex-col font-['Poppins'] mr-7 w-full gap-3">
      {/* Header */}
      <div className="flex flex-row pl-3 pr-3 mt-3 text-[18px]">
        <h1 className="text-[#214DBA]">Chapter No</h1>
        <h1 className="ml-[90px] text-[#214DBA]">Chapter</h1>
      </div>

      {chapters.map((chapter) => (
        <div key={chapter.id}>
          {/* Chapter Section */}
          <div className="flex flex-row w-full pr-3 mt-3 text-[17px] font-['Poppins']">
            <div
              className="ml-3 flex gap-2 items-center bg-[#E1EAFF] shadow-md cursor-pointer"
              onClick={() => handleChapterClick(chapter.id)}
            >
              <img className="w-[25.5px] h-[25.5px] ml-1" src={c1} alt="" />
              <p>Chapter - {chapter.id}</p>
              <img
                className="ml-5 mr-2"
                src={isOpenChapter === chapter.id ? dropup : arrow}
                alt=""
              />
            </div>

            <div className="flex flex-row grow ml-3 h-[35px] bg-[#E1EAFF] cursor-pointer shadow-md justify-between"onClick={() => handleChapterClick(chapter.id)}>
              <p className="ml-3 mt-1">{chapter.title}</p>
              <img className="h-[15px] w-[15px] mt-3 mr-4" src={info} alt="" />
            </div>
          </div>

          {/* Topics Section */}
          {isOpenChapter === chapter.id && (
            <div className="mx-6 bg-[rgba(255,249,191,0.50)] mt-4 pb-4 shadow-md border-[1px] border-[#FFC642]">
              <div className="flex flex-row pl-3 pr-3 mt-3 ml-5 text-[18px]">
                <h1 className="text-[#B68618]">Topic No</h1>
                <h1 className="ml-[70px] text-[#B68618]">Topic</h1>
              </div>

              {chapter.topics.slice(0, 4).map((topic, index) => (
                <div key={topic.id}>
                  {/* Topic Section */}
                  <div
                    className="flex flex-row pr-5 mt-3 text-[17px] font-['Poppins'] cursor-pointer"
                    onClick={() => handleTopicClick(topic.id)}
                  >
                    <div className="ml-3 flex gap-2 items-center shadow-md bg-[#FFEBBD]">
                      <img
                        className="w-[25.5px] h-[25.5px] ml-1"
                        src={c1}
                        alt=""
                      />
                      <p>Topic - {topic.id}</p>
                      <img
                        className="ml-5 mr-2"
                        src={isOpenTopic === topic.id ? dropup : arrow}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-row grow ml-3 h-[35px] bg-[#FFEBBD] shadow-md justify-between">
                      <p className="ml-3 mt-1">{topic.title}</p>
                      <img
                        className="h-[15px] w-[15px] mt-3 mr-4"
                        src={info1}
                        alt=""
                      />
                    </div>
                  </div>

                  {/* Subtopics Section */}
                  {isOpenTopic === topic.id && (
                    <div className="mx-8 bg-[rgba(255,185,139,0.19)] border-[1px] border-[#FA7E00] mt-4 my-2 py-2 pb-4 shadow-md">
                      <div className="flex flex-row pl-3 pr-3 mt-3 text-[18px]">
                        <h1 className="text-[#E77500]">Subtopic No</h1>
                        <h1 className="ml-[90px] text-[#E77500]">Subtopic</h1>
                      </div>

                      {topicsData
                        .find((t) => t.id === topic.id)
                        ?.subtopics.map((subtopic) => (
                          <div
                            key={subtopic.id}
                            className="flex flex-row w-full pr-3 mt-3 text-[17px] font-['Poppins']"
                          >
                            <div className="ml-3 flex gap-2 w-[166px] items-center bg-[rgba(252,192,128,0.40)] shadow-md">
                              <img
                                className="w-[25.5px] h-[25.5px] ml-1"
                                src={sub}
                                alt=""
                              />
                              <p>Subtopic - {subtopic.id}</p>
                            </div>

                            <div className="flex flex-row grow ml-3 h-[35px] bg-[rgba(252,192,128,0.40)] shadow-md justify-between">
                              <p className="ml-3 mt-1">{subtopic.title}</p>
                              <img
                                className="h-[15px] w-[15px] mt-3 mr-4"
                                src={info2}
                                alt=""
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Mini Task Section (After Every 2 Topics) */}
                  {(index + 1) % 2 === 0 && (
                    <div className="flex flex-row w-full pr-3 mt-3 text-[17px] font-['Poppins']">
                      <div className="ml-3 flex w-[142px] gap-2 items-center bg-[#FFD5F1] shadow-md">
                        <div className="w-[25.5px] h-[25.5px] mt-0 ml-1">
                          <img src={c1} alt="" />
                        </div>
                        <div className="ml-1">
                          <p>Mini Task</p>
                        </div>
                      </div>

                      <div className="flex flex-row grow ml-3 h-[35px]">
                        <div className="divider">
                          <hr className="line" />
                          <span className="text">
                            There will be a mini task after the topic. Complete
                            it to proceed to the next topic.
                          </span>
                          <hr className="line" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
