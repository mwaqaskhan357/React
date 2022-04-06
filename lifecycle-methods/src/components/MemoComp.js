import React from "react"

function MemoComp({ name }) {
  console.log("Memo component")
  return <div>welcome {name} to memo component</div>
}

export default React.memo(MemoComp)
