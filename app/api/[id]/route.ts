import { getData, insert, remove, update } from "common/api"

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const data = await getData(params.id)
  return Response.json(data)
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await insert(params.id, [await req.json()])
  return Response.json(data)
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await update(params.id, await req.json())
  return Response.json(data)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const data = await remove(params.id, id)
  return Response.json(data)
}
