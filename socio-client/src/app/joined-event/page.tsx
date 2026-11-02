import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const JoinedEvent = () => {
    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative max-w-7xl mx-auto'>
                <h2 className="font-bold text-2xl text-[#636467] mb-0.5">Joined Events</h2>
                <p className="font-medium text-[#636467] text-[14px] mb-0.5">Stay Connected and Keep Supporting Your Community</p>
                <br />
                <div className="flex w-full flex-col gap-6">
                    <Item variant="outline">
                        <ItemMedia variant="icon">
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Default Size</ItemTitle>
                            <ItemDescription>
                              The standard size for most use cases.
                            </ItemDescription>
                        </ItemContent>
                    </Item>
                    <Item variant="outline" size="sm">
                        <ItemMedia variant="icon">
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Small Size</ItemTitle>
                            <ItemDescription>A compact size for dense layouts.</ItemDescription>
                        </ItemContent>
                    </Item>
                    <Item variant="outline" size="xs">
                        <ItemMedia variant="icon">
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle>Extra Small Size</ItemTitle>
                          <ItemDescription>The most compact size available.</ItemDescription>
                        </ItemContent>
                    </Item>
                </div>
            </div>
        </section>
    );
};

export default JoinedEvent;