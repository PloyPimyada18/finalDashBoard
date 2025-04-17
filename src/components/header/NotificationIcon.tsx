import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useState } from "react";

const NotificationIcon = () => {
  const [notificationCount] = useState(5);

  return (
    <Badge count={notificationCount}>
      <BellOutlined style={{ fontSize: "20px" }} />
    </Badge>
  );
};

export default NotificationIcon;
