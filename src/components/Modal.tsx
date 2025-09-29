import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Group,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({ onAdd }: AddExpenseModalProps) {
  const [opened, setOpened] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number | "">(0);
  const [category, setCategory] = useState<string | null>(null);

  const [errors, setErrors] = useState({
    name: "",
    amount: "",
    category: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", amount: "", category: "" };

    if (!name) {
      newErrors.name = "Expense Name is required";
      valid = false;
    }
    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Amount is required";
      valid = false;
    }
    if (!category) {
      newErrors.category = "Category is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate() && category) {
      onAdd(name, Number(amount), category);
      setOpened(false);
      setName("");
      setAmount(0);
      setCategory(null);
    }
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Add Expense Item</Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add Expense"
        centered
      >
        <Stack>
          <TextInput
            label="Expense Name *"
            placeholder="E.g., Coca-Cola"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            error={errors.name}
          />

          <NumberInput
            label="Amount"
            placeholder="0"
            value={amount}
            onChange={(val) => setAmount(typeof val === "number" ? val : 0)}
            error={errors.amount}
          />

          <Select
            label="Category"
            placeholder="Select Category"
            data={["Food", "Transport", "Shopping", "Other"]}
            value={category}
            onChange={setCategory}
            error={errors.category}
          />

          <Group justify="flex-end">
            <Button onClick={handleSubmit}>Submit</Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
