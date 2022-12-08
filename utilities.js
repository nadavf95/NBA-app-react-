import Message from "./components/message";
import { useApiData } from "./hooks/data";

export function ChangeHandler(func, key, value){
  if (key ==="date"){
    func(GetData(value));
  }
  else{
    func(value);
  }
}

export function GetData(date, sort_val, filter_val) {
  console.log("HERE!!!");
  const { data, isLoading, isError } = useApiData();
   
  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  // Just for convenience
  console.log(data);
  const games = data.data;
  return (games);
}


