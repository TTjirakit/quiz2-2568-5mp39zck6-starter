import { Card, Group, Badge, ActionIcon, Text, Stack } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import AddExpenseModal from "./Modal";


type Expense = {
  name: string;
  amount: number;
  category: string;
};

export default function ItemCard() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAdd = (name: string, amount: string | number, category: string) => {
    setExpenses([...expenses, { name, amount: Number(amount), category }]);
  };

  const handleDelete = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Stack>
      <AddExpenseModal onAdd={handleAdd} opened={false} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />

      {expenses.map((exp, index) => (
        <Card key={index} p="md" shadow="sm">
          <Group justify="space-between" mt="md" mb="xs">
            <Text>{exp.name}</Text>
            <Text>{exp.amount}</Text>
            <Badge color="blue" radius="md">
              {exp.category}
            </Badge>
            <ActionIcon color="red" onClick={() => handleDelete(index)}>
              <IconTrash />
            </ActionIcon>
          </Group>
        </Card>
      ))}

      <Card p="md" shadow="sm">
        <Text fw={700}>Total: {total}</Text>
      </Card>
    </Stack>
  );
}