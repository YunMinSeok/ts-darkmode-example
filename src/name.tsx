import React from "react";
type NameType = {
  name: string;
};

function NameFunc({ name }: NameType) {
  return name;
}

export default NameFunc;
