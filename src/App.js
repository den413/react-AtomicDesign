import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export const App = () => {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondryButton>検索</SecondryButton>
      <br />
      <SearchInput></SearchInput>
    </div>
  );
};
