import { NextRequest, NextResponse } from "next/server";

const allRooms = async (req: NextRequest) => {
  return NextResponse.json({
    data: "Hello erwane",
  });
};

export default allRooms;
