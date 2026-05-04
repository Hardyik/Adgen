import bcrypt from "bcryptjs";

async function test() {
  try {
    console.log("Testing bcryptjs...");
    const hash = await bcrypt.hash("testpassword", 12);
    console.log("Hash created:", hash);
    const match = await bcrypt.compare("testpassword", hash);
    console.log("Match:", match);
    process.exit(0);
  } catch (err) {
    console.error("Bcrypt test failed:", err);
    process.exit(1);
  }
}

test();
