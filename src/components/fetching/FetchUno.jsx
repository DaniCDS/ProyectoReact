import { useFetch } from "../../utils/hooks/useFetch";

const FetchUno = () => {
  let { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    []
  );
  console.log(data);

  return <div>Fetch uno</div>;
};

export default FetchUno;
