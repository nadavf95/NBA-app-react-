import Message from "./components/message";
import { useApiData } from "./hooks/data";

export function ChangeHandler(func, key, value){
  console.log("in handler key:  " + key + "  value:  " + value);
  if (key ==="date"){
    const games = GetData(value);
    return games;
  }
  else{
    return value;
  }
}

export function GetData(date) {
  console.log("in get data!!!!!!!!!!!!!!!");
  const { data, isLoading, isError } = useApiData();
   
  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  // Just for convenience
  console.log(data);
  const games = data.data;
  return (games);
}


