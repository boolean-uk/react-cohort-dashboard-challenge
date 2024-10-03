import { useEffect, useState } from "react";
import Avatar from "../../common/Avatar";
import { CommentProps, ContactProps } from "../../common/types";
import { mockContact } from "../../common/mock";

export default function Comment(props: CommentProps) {
  const [contact, setContact] = useState<ContactProps>(mockContact);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/hermagst/contact/${props.contactId}`,
    )
      .then((res) => res.json())
      .then((body: ContactProps) => setContact(body));
  }, [props.id]);

  return (
    <div className="flex items-start space-x-3">
      <Avatar imgSrc={contact.profileImage} />

      <div className="bg-[#dfe7f4] rounded-lg p-3 w-full">
        <h4 className="text-sm font-bold text-[#00235b]">
          {`${contact.firstName} ${contact.lastName}`}
        </h4>
        <p className="text-sm text-[#4c5c7c]">{props.content}</p>
      </div>
    </div>
  );
}
