import { Switch, useMantineColorScheme, } from '@mantine/core';

const ThemeSwitcher = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const sun = <span style={{ fontSize: 18, }}>☀️</span>;
    const moon = <span style={{ fontSize: 18, }}>🌙</span>;
    return <Switch
        size="md"
        color={colorScheme}
        onLabel={sun}
        offLabel={moon}
        onChange={() => toggleColorScheme()}
        style={{ transition: 'linear' }}
    />;
};

export default ThemeSwitcher;