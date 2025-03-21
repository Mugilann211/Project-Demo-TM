import React, { useState } from "react";
import book from "../../assets/book.png";
import right from "../../assets/right.png";
import paper from "../../assets/paper.png";
import bar from "../../assets/barbox.png";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import chapters from "../../data/chapters";

const Python = () => {
  const [chapterAnchor, setChapterAnchor] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);

  const [topicAnchor, setTopicAnchor] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(
    selectedChapter.topics.find((topic) => topic.type === "regular") || null
  );

  const [subtopicAnchor, setSubtopicAnchor] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(
    selectedTopic?.subtopics?.[0] || null
  );

  // Chapter Menu Handlers
  const handleChapterClick = (event) => setChapterAnchor(event.currentTarget);
  const handleChapterClose = (chapter = null) => {
    if (chapter) {
      setSelectedChapter(chapter);
      const firstTopic = chapter.topics.find((t) => t.type === "regular") || null;
      setSelectedTopic(firstTopic);
      setSelectedSubtopic(firstTopic?.subtopics?.[0] || null);
    }
    setChapterAnchor(null);
  };

  // Topic Menu Handlers
  const handleTopicClick = (event) => setTopicAnchor(event.currentTarget);
  const handleTopicClose = (topic = null) => {
    if (topic) {
      setSelectedTopic(topic);
      setSelectedSubtopic(topic.subtopics?.[0] || null);
    }
    setTopicAnchor(null);
  };

  // Subtopic Menu Handlers
  const handleSubtopicClick = (event) => setSubtopicAnchor(event.currentTarget);
  const handleSubtopicClose = (subtopic = null) => {
    if (subtopic) {
      setSelectedSubtopic(subtopic);
    }
    setSubtopicAnchor(null);
  };

  return (
    <div className="div2 flex items-center">
      <div className="bg mt-3">
        <p className="ml-2">Python Course</p>
      </div>

      {/* Chapter Menu */}
      <IconButton color="" size="small" onClick={handleChapterClick}>
        <img className="w-[13px] h-[18px] ml-3" src={book} alt="Book" />
        <p className="truncate-text text-black ml-2">
          Chapter - {selectedChapter.id}: {selectedChapter.title}
        </p>
      </IconButton>
      <Menu anchorEl={chapterAnchor} open={Boolean(chapterAnchor)} onClose={() => handleChapterClose()}>
        {chapters.map((chapter) => (
          <MenuItem key={chapter.id} onClick={() => handleChapterClose(chapter)}>
            Chapter - {chapter.id}: {chapter.title}
          </MenuItem>
        ))}
      </Menu>

      <div className="ml-2 mt-1">
        <img src={right} alt="Arrow" />
      </div>

      {/* Topic Menu */}
      {selectedChapter.topics.some((topic) => topic.type === "regular") && (
        <>
          <IconButton color="" size="small" onClick={handleTopicClick}>
            <img className="w-[13px] h-[18px] ml-3" src={paper} alt="Paper" />
            <p className="truncate-text text-black ml-2">
              Topic - {selectedTopic?.id}: {selectedTopic?.title}
            </p>
          </IconButton>
          <Menu anchorEl={topicAnchor} open={Boolean(topicAnchor)} onClose={() => handleTopicClose()}>
            {selectedChapter.topics
              .filter((topic) => topic.type === "regular")
              .map((topic) => (
                <MenuItem key={topic.id} onClick={() => handleTopicClose(topic)}>
                  Topic - {topic.id}: {topic.title}
                </MenuItem>
              ))}
          </Menu>

          <div className="ml-2 mt-1">
            <img src={right} alt="Arrow" />
          </div>
        </>
      )}

      {/* Subtopic Menu */}
      {selectedTopic?.subtopics && selectedTopic.subtopics.length > 0 && (
        <>
          <IconButton size="small" onClick={handleSubtopicClick}>
            <img className="w-[13px] h-[18px] ml-3" src={bar} alt="Bar" />
            <p className="truncate-text text-black ml-2">
              Subtopic - {selectedSubtopic?.id}: {selectedSubtopic?.title}
            </p>
          </IconButton>
          <Menu anchorEl={subtopicAnchor} open={Boolean(subtopicAnchor)} onClose={() => handleSubtopicClose()}>
            {selectedTopic.subtopics.map((subtopic) => (
              <MenuItem key={subtopic.id} onClick={() => handleSubtopicClose(subtopic)}>
                Subtopic - {subtopic.id}: {subtopic.title}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
};

export default Python;
