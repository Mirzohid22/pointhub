import { useDisclosure } from "@mantine/hooks";
import { Popover, Text, Button } from "@mantine/core";

interface DynamicPositionProps {
  position: number;
  tooltip: string;
}

const getColor = (position: number): string => {
  if (position < 5) {
    return "blue";
  }
  if (position === 5) {
    return "yellow";
  }
  return "gray";
};

const DynamicPosition: React.FC<DynamicPositionProps> = ({
  position,
  tooltip,
}) => {
  const [opened, { close, open }] = useDisclosure(false);
  if (position > 5) {
    return (
      <Button
        color={getColor(position)}
        size="xs"
        radius="xl"
        variant="outline"
        style={{ pointerEvents: "none" }}
      >
        {position}
      </Button>
    );
  }
  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <Button
          onMouseEnter={open}
          onMouseLeave={close}
          color={getColor(position)}
          size="xs"
          radius="xl"
          variant="outline"
        >
          {position}
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Text size="sm">{tooltip}</Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default DynamicPosition;
