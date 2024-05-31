import React, { useMemo, useState } from "react";
import Container from "@/components/ui/container/Container";
import TabWithContent from "@/components/ui/tabs/TabWithContent";

type Props = {};

const WhatIKnow = (props: Props) => {
  return (
    <Container headingName={"Technologies"}>
        <TabWithContent />
    </Container>
  );
};

export default WhatIKnow;
