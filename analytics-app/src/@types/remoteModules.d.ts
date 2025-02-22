declare module "dashboard/GlobalContext" {
    export const useGlobalContext: () => {
        user: string;
        theme: "light" | "dark";
        setUser: (user: string) => void;
        toggleTheme: () => void;
    };
}
