import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs().locale("pt-br").format();
dayjs.extend(relativeTime);

type Props = {
  data: Date;
};

export default function RelativeTime(props: Props) {
  return <>{dayjs().locale("pt-br").to(dayjs(props.data))}</>;
}
