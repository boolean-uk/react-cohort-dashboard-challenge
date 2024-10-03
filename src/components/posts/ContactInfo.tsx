import { ContactProps } from "../common/types";

export default function ContactInfo({ firstName, lastName }: ContactProps) {
  return (
    <h2 className="text-lg font-bold text-gray-900">
      {`${firstName} ${lastName}`}
    </h2>
  );
}
