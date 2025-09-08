// import { Text, Group } from "@mantine/core";
import { Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer(props:FooterProps) {
  return (
    <Group p="md" justify="center">
        <text>
        {props.courseName}-{props.year} {props.fullName} {props.studentId}. All rights reserved.
      </text>
    </Group>
  );
}
