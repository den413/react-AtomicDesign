import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/use/UserCard";
import "./styles.css";

const user = {
  name: "toru",
  image: "https://source.unsplash.com/WX4i1Jq_o0Y",
  email: "adg@fgef.com",
  phone: "000-9354-8216",
  company: {
    name: "aaaaa会社"
  },
  website: "https://google.com"
};

export const App = () => {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondryButton>検索</SecondryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
};
