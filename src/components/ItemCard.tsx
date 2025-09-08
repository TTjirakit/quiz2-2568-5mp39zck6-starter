import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

// type ExpenseProps = {
//   name: string;
//   amount: number | string;
//   category: string;
//   onDelete: () => void;
// };

export default function ItemCard() {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
     <Card p="md">

      <Group justify="space-between" mt="md" mb="xs">
      <Text>
          
      </Text>

      <Text>
        
      </Text>

      <Badge color="blue" radius="md">
        ExpenseProps.category
      </Badge>
     
      <ActionIcon color="red">
        <IconTrash/>
      </ActionIcon>

      </Group>
    </Card>
  );
}