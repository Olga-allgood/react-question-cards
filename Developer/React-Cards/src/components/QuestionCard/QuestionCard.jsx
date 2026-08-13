import { useState } from "react";
import { Card, Typography, Button } from "antd";

const { Title, Text } = Typography;

export const QuestionCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card
      style={{
        height: "100%",
      }}
      styles={{
        body: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Title level={5}>{question}</Title>

      <Text
        type="secondary"
        onClick={() => setShowAnswer(!showAnswer)}
        style={{
          cursor: "pointer",
        }}
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </Text>

      {showAnswer && <p>{answer}</p>}

      <Button
        type="primary"
        style={{
          marginTop: "auto",
          marginLeft: "auto",
        }}
      >
        View
      </Button>
    </Card>
  );
};