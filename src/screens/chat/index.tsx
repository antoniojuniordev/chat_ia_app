import { useEffect, useState } from 'react';

import Input from 'core/components/input';
import Button from 'core/components/button';

import useFetch from 'core/hooks/useFetch';
import * as Styled from './styled';

interface MessagesProp {
  id: string
  search: string
  identify: string
  responseText: string
  createdAt: string
}

export default function Chat() {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<MessagesProp[]>([]);
  const [load, setLoad] = useState(true);
  const [loadSend, setLoadSend] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  const [page, setPage] = useState(0);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  useEffect(() => {
    getMessages(0);
  }, []);

  async function getMessages(pageNext: number) {
    if (pageNext === 0) setLoad(true);
    const response = await useFetch({
      method: 'get',
      url: '/search/ramon',
      params: {
        page: pageNext,
        limit: 5,
      },
    });
    if (response.error) {
      setLoad(false);
      return;
    }
    const { data } = response.success;
    setMessages((old) => [...old, ...data]);
    if (page + 1 >= response.success.total_page) setNextPage(false);
    setLoadingNextPage(false);
    setLoad(false);
  }

  async function onNextPage() {
    if (!nextPage) return;
    if (loadingNextPage) return;
    setLoadingNextPage(true);
    setPage(page + 1);
    await getMessages(page + 1);
  }

  function formatDate(date: string) {
    return new Intl.DateTimeFormat('pt-BR', {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles',
    }).format(new Date(date));
  }

  async function sendMessage() {
    const search = value;
    setLoadSend(true);
    const response = await useFetch({
      method: 'post',
      url: '/search/ramon',
      body: {
        search,
      },
    });
    if (response.error) {
      setLoadSend(false);
      return;
    }
    setMessages((old) => [response.success, ...old]);
    setLoadSend(false);
  }

  return (
    <Styled.Container>
      {load ? <Styled.Load size="large" /> : (
        <>
          <Styled.MessagesFlatList
            inverted
            data={messages}
            onEndReached={() => onNextPage()}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: any) => (
              <>
                {item.responseText
                  && (
                    <Styled.ViewMessage userSend={false}>
                      <Styled.Message>
                        {item.responseText}
                      </Styled.Message>
                      <Styled.Time>
                        {formatDate(item.createdAt)}
                      </Styled.Time>
                    </Styled.ViewMessage>
                  )}
                <Styled.ViewMessage userSend>
                  <Styled.Message>
                    {item.search}
                  </Styled.Message>
                  <Styled.Time>
                    {formatDate(item.createdAt)}
                  </Styled.Time>
                </Styled.ViewMessage>
              </>
            )}
            ListFooterComponent={loadingNextPage ? <Styled.Load /> : <></>}
          />
          <Styled.ContainerFooter>
            <Input value={value} placeholder="Mensagem" onChangeText={(text) => setValue(text)} />
            <Button onPress={() => sendMessage()} load={loadSend} />
          </Styled.ContainerFooter>
        </>
      )}

    </Styled.Container>
  );
}
