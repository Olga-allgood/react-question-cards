// import { Form, Input, Button, Typography, Card } from "antd";

// const { Title } = Typography;

// export const AddQuestion = () => {
//   const [form] = Form.useForm();

//   const handleSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Card style={{ maxWidth: 700, margin: "0 auto" }}>
//       <Title level={2}>Add Question</Title>

//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={handleSubmit}
//       >
//         <Form.Item
//           label="Question"
//           name="question"
//           rules={[
//             {
//               required: true,
//               message: "Please enter a question",
//             },
//           ]}
//         >
//           <Input.TextArea
//             rows={4}
//             placeholder="Enter your question"
//           />
//         </Form.Item>

//         <Form.Item
//           label="Answer"
//           name="answer"
//           rules={[
//             {
//               required: true,
//               message: "Please enter an answer",
//             },
//           ]}
//         >
//           <Input.TextArea
//             rows={6}
//             placeholder="Enter the answer"
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Add Question
//           </Button>
//         </Form.Item>
//       </Form>
//     </Card>
//   );
// };

export const AddQuestion = () => {
  return <h1>Add Question</h1>;
};