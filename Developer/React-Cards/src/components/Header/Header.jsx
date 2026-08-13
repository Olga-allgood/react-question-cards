
import { useNavigate } from "react-router-dom";
import { Button, Flex, Typography } from "antd";

const { Title } = Typography;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ padding: "16px 24px" }}
    >
      <Title
        level={3}
        style={{ margin: 0, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        React Cards
      </Title>

      <Flex gap="small">
        <Button>
          Login
        </Button>

        <Button
          type="primary"
          onClick={() => navigate("/addquestion")}
        >
          Add Question
        </Button>
      </Flex>
    </Flex>
  );
};

