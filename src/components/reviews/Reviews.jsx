import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { Item, H3 } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const movieReviews = await fetchMovieReviews(movieId);

        if (movieReviews) setMovieReviews(movieReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}

      <div>
        <ul>
          {movieReviews.length ? (
            movieReviews.map(review => {
              const { id, author, content } = review;

              return (
                <Item key={id}>
                  <H3>Autor: {author}</H3>
                  <p>{content}</p>
                </Item>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Reviews;

// {
//   "id": 550,
//   "page": 1,
//   "results": [
//     {
//       "author": "Goddard",
//       "author_details": {
//         "name": "",
//         "username": "Goddard",
//         "avatar_path": "/https://secure.gravatar.com/avatar/f248ec34f953bc62cafcbdd81fddd6b6.jpg",
//         "rating": null
//       },
//       "content": "Pretty awesome movie.  It shows what one crazy person can convince other crazy people to do.  Everyone needs something to believe in.  I recommend Jesus Christ, but they want Tyler Durden.",
//       "created_at": "2018-06-09T17:51:53.359Z",
//       "id": "5b1c13b9c3a36848f2026384",
//       "updated_at": "2021-06-23T15:58:09.421Z",
//       "url": "https://www.themoviedb.org/review/5b1c13b9c3a36848f2026384"
//     },
//     {
//       "author": "Brett Pascoe",
//       "author_details": {
//         "name": "Brett Pascoe",
//         "username": "SneekyNuts",
//         "avatar_path": "/https://secure.gravatar.com/avatar/04d45e186650672a416315dac947b3d6.jpg",
//         "rating": 9
//       },
//       "content": "In my top 5 of all time favourite movies. Great story line and a movie you can watch over and over again.",
//       "created_at": "2018-07-05T13:22:41.754Z",
//       "id": "5b3e1ba1925141144c007f17",
//       "updated_at": "2021-06-23T15:58:10.199Z",
//       "url": "https://www.themoviedb.org/review/5b3e1ba1925141144c007f17"
//     },
//     {
//       "author": "MSB",
//       "author_details": {
//         "name": "MSB",
//         "username": "msbreviews",
//         "avatar_path": "/https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
//         "rating": 8
//       },
//       "content": "If you enjoy reading my Spoiler-Free reviews, please follow my blog @\r\nhttps://www.msbreviews.com\r\n\r\nDavid Fincher’s new film, Mank, is coming soon on Netflix, released six years after his latest installment, Gone Girl. Therefore, this week I’m reviewing five of Fincher’s movies. Se7en was the first one, and now it’s time for one of the most culturally impactful films of the 90s, Fight Club. This is another rewatch of another filmmaking classic, one that I was never able to absolutely adore like most people. When this movie came out in 1999, critics were extremely divided, and the film failed at the box office. With time, it gained a cult following through home media, but it’s still considered a very controversial piece of cinema. So, nothing new, having in mind Fincher is at the helm.\r\n\r\nDespite this being my third or fourth time experiencing this story, I never really changed my opinion about it, which is a bit uncommon in my viewing history. Usually, after multiple rewatches, my overall thoughts about a movie slightly vary, but Fight Club is one of the few exceptions. I believe my opinion remains intact from the very first watch. I really enjoy this film, but I can’t state that I absolutely love it. Since this is a special case, I’m going to start with what still bothers me after so many viewings, something I also rarely do in my reviews since I always leave the bad stuff to the end of the article.\r\n\r\nWithout spoiling anything, of course, there’s a vital plot twist that comes later in the movie that I could only appreciate by its execution, but never by its impact on the narrative. Jim Uhls’ screenplay relies on the main characters’ friendship to carry the story forward, and throughout the first two acts, Fincher leaves not-that-subtle hints to a massive revelation, which eventually triggers the beginning of the third act. This major plot point is brilliantly executed, and I still feel incredibly fascinated by its delivery, both in terms of the dialogue and the performances. However, its impact on any lightly focused, observant viewer is close to zero due to the clear evidence that pointed towards this development.\r\n\r\nNow, I don’t want to sound like that stereotypical moviegoer that says, “I guessed the twist before its revelation, hence it all sucks”. Like I insinuate above, I was still wholly captivated during the entirety of the third act. Nevertheless, Fight Club’s runtime is far from being short, and Fincher spends a lot of time building up an idea that loses its surprise factor even before the film’s midpoint. It changes the protagonist’s perspective, it takes the viewer through a predictable yet entertaining path, setting up a powerful, meaningful ending. However, personally, I don’t feel like the time spent in the first two acts was satisfyingly compensated in the end… at least, not in its entirety.\r\n\r\nThe second act also has a short period where it loses a bit of steam due to some repetitive sequences and an unnecessary amount of flashbacks. Again, I feel like Fincher didn’t completely trust the audience back then, contrary to his procedure in Se7en. In the latter flick, Fincher left the biggest responsibility to the viewer’s imagination, leaving the murder scenes for the audience to picture in their minds. In Fight Club, that ambiguity and implicit dialogue are still present, sure, but even before the third act, there’s already an attempt to explain too much certain portions of the narrative that I wish would stay vaguer.\r\n\r\nWithout spoiling anything, of course, there’s a vital plot twist that comes later in the movie that I could only appreciate by its execution, but never by its impact on the narrative. Jim Uhls’ screenplay relies on the main characters’ friendship to carry the story forward, and throughout the first two acts, Fincher leaves not-that-subtle hints to a massive revelation, which eventually triggers the beginning of the third act. This major plot point is brilliantly executed, and I still feel incredibly fascinated by its delivery, both in terms of the dialogue and the performances. However, its impact on any lightly focused, observant viewer is close to zero due to the clear evidence that pointed towards this development.\r\n\r\nNow, I don’t want to sound like that stereotypical moviegoer that says, “I guessed the twist before its revelation, hence it all sucks”. Like I insinuate above, I was still wholly captivated during the entirety of the third act. Nevertheless, Fight Club’s runtime is far from being short, and Fincher spends a lot of time building up an idea that loses its surprise factor even before the film’s midpoint. It changes the protagonist’s perspective, it takes the viewer through a predictable yet entertaining path, setting up a powerful, meaningful ending. However, personally, I don’t feel like the time spent in the first two acts was satisfyingly compensated in the end… at least, not in its entirety.\r\n\r\nThe second act also has a short period where it loses a bit of steam due to some repetitive sequences and an unnecessary amount of flashbacks. Again, I feel like Fincher didn’t completely trust the audience back then, contrary to his procedure in Se7en. In the latter flick, Fincher left the biggest responsibility to the viewer’s imagination, leaving the murder scenes for the audience to picture in their minds. In Fight Club, that ambiguity and implicit dialogue are still present, sure, but even before the third act, there’s already an attempt to explain too much certain portions of the narrative that I wish would stay vaguer.\r\n\r\nDon’t worry, I’m done with the negatives, and don’t forget: I really, really like this movie. Obviously, Fincher and Uhls created a story packed with underlying themes and social commentary. From the whole consumerism theory to the more psychological component regarding Edward Norton’s mental state, every message is seamlessly communicated to the audience. I’ve also been through a point in my life where I wish I’d be someone else, someone who had already achieved every dream of mine successfully with an overwhelming feeling of fulfillment. Coping with the inability to become that perfect someone can become an excruciating, sad, depressing process, and it varies drastically from person to person.\r\n\r\nFight Club approaches mental health and people’s acceptance of who they truly are in a groundbreaking manner, capturing Edward Norton’s emotions perfectly and broadcasting his thoughts through some of the best narration in the history of cinema. Its take on the world of consumerism is undoubtedly interesting and plays a big part in the climax of the film. Despite the issues described above, Uhls’ screenplay is very well-written, elevating the conversations between Norton and Brad Pitt (Ad Astra, Once Upon a Time in Hollywood), which are indeed remarkably entertaining. Predictable or not, the main story is wonderfully executed by Fincher, who continues to demonstrate his impressive technical attributes.\r\n\r\nOnce again, the pre-production phase is proved here to be as important as any other stage in the filmmaking process. Fincher’s dedication to his features is palpable and visible on-screen through every single technical aspect. This time, Fincher brought in Jeff Cronenweth as the director of photography, and both worked together to not only create that desaturated, realistic atmosphere that Fincher loves so much but also to deliver the brutal, violent, bloody fight scenes that keep the entertainment levels at their highest. With clean, consistent, coherent editing from James Haygood, the movie flows beautifully despite its lengthy runtime. The Dust Brothers’ score is quite alternative, which suits the also unconventional storytelling.\r\n\r\nLast but not least, Edward Norton and Brad Pitt. I know it’s incredibly cliche to write that two actors share impeccable chemistry, but Norton and Pitt take it to a whole other level. In two physically-demanding displays, both actors deliver award-worthy performances that marked their careers. Pitt offers one of his most underrated portrayals, being extremely funny throughout the entire film, but also astonishingly badass, carrying his fight sequences as amazing as he does with his dialogues. On the other hand, seeing Norton go all-out is a terrific experience. I lack words to describe such an emotionally compelling interpretation, filled with powerful character moments. A final word of praise to Helena Bonham Carter (Enola Holmes), who also delivers an exceptional performance.\r\n\r\nIn the end, Fight Club is and will probably remain David Fincher’s most controversial movie for a long, long time. With an absolutely brilliant direction and execution, Fincher uses Jim Uhls’ captivating, layered, unconventional screenplay to tackle themes such as consumerism, society’s behavior, and mental health, seamlessly transmitting meaningful yet contentious messages. Once again, the filmmaking in display is technically flawless, going from the trademark authentic cinematography and production design to the unique score, all flowing superbly through excellent editing. Unfortunately, I don’t belong to the group of people who utterly love this film. The excessive (sometimes unnecessary) use of flashbacks doesn’t help, but it’s the enormous build-up packed with overly explicit clues to a significant (yet unsurprising) plot twist that ends up partially ruining the viewing for me. I also wish that the script developed a few plot points more ambiguously, but Brad Pitt and Edward Norton elevate the whole movie so much with their ridiculously outstanding performances that these small issues don’t keep me away from highly recommending one of the most memorable, iconic films of all-time.\r\n\r\nRating: A-",
//       "created_at": "2020-11-22T17:13:46.301Z",
//       "id": "5fba9c4a0792e1003f3a1294",
//       "updated_at": "2021-06-23T15:58:47.886Z",
//       "url": "https://www.themoviedb.org/review/5fba9c4a0792e1003f3a1294"
//     },
//     {
//       "author": "r96sk",
//       "author_details": {
//         "name": "",
//         "username": "r96sk",
//         "avatar_path": "/https://secure.gravatar.com/avatar/96c2e0e4ac98450f9e8e3c0a0a40aad8.jpg",
//         "rating": 7
//       },
//       "content": "I didn't enjoy this, pretty much at all, but still kinda appreciate how it all comes together. It's a weird one for me.\r\n\r\nOverall, <em>'Fight Club'</em> underwhelmed me. I actually knew very little before viewing it, despite hearing about it on a surface level for years and years; well, one 'regulatory' part of it anyway. It's much deeper than I had expected. Unfortunately, I didn't find entertainment with any of it - it was, to be honest, a slog to sit through.\r\n\r\nThe only scene I can remember enjoying is the very last one, and I don't mean that negatively because the end shot is terrific. It's just everything that comes before didn't do anything for me. Yet, I still rate its intentions. It did keep me guessing amidst my, near, boredom and the 'event' is a good one on paper. It just failed to connect on me in actuality.\r\n\r\nBrad Pitt is good as Tyler, though the likes of Edward Norton and Helena Bonham Carter give meh performances in my opinion. Meat Loaf is interesting, I guess, as Bob.\r\n\r\nI'm evidently in the extreme minority with my thoughts, each to their own, but I honestly didn't get into it sadly. As noted, though, I still partially rate it weirdly. 6* feels harsh, so I give it 7*.",
//       "created_at": "2021-01-13T03:23:09.309Z",
//       "id": "5ffe679d7d5db5003bc8340a",
//       "updated_at": "2021-06-23T15:58:50.082Z",
//       "url": "https://www.themoviedb.org/review/5ffe679d7d5db5003bc8340a"
//     },
//     {
//       "author": "rsanek",
//       "author_details": {
//         "name": "",
//         "username": "rsanek",
//         "avatar_path": "/https://secure.gravatar.com/avatar/ff26e67aa9c3fa9a5f3add667db55d2e.jpg",
//         "rating": 9
//       },
//       "content": "I was mostly neutral on this movie until the last third, when things turned psychologically thrilling and gave me American Psycho vibes. The \"His name was Robert Paulson\" scene specifically was where the film turned from 3 starts to 4.5 stars. Would recommend and I intend to return to this in some time as I feel it has higher rewatchability than many films of this style.",
//       "created_at": "2021-05-04T18:16:54.168Z",
//       "id": "60918f96b3e6270029645c19",
//       "updated_at": "2021-06-23T15:58:55.175Z",
//       "url": "https://www.themoviedb.org/review/60918f96b3e6270029645c19"
//     },
//     {
//       "author": "Wuchak",
//       "author_details": {
//         "name": "",
//         "username": "Wuchak",
//         "avatar_path": "/4KVM1VkqmXLOuwj1jjaSdxbvBDk.jpg",
//         "rating": 6
//       },
//       "content": "_**Finding enlightenment thru beating each other to a pulp**_\r\n\r\nA 30 year-old man in Los Angeles works the office drudgery, but suffers insomnia (Edward Norton). He’s finally inspired by an unconventional woman he meets at support groups (Helena Bonham Carter) and, especially, a devil-may-care guy who lives on the outskirts of town (Brad Pitt). They start an underground club where men get together and vent their frustrations by beating the crap out of each other.\r\n\r\n\"Fight Club\" (1999) has a huge reputation as a stylish cult flick and is often ranked with the greatest films ever made. The first half is entertaining enough, both quirky and amusing; and I like the interesting themes explored: Escaping the maternal and material, being a slave to advertising, rebelling against life-stifling conformity, being a blind follower of a charismatic leader, finding your inner wild-man, Dr. Jekyll & Mr. Cool, the nature of lawless “revolutionaries” (which is too reminiscent of ANTIFA thugs), the struggle with homosexuality interpretation, etc. \r\n\r\nThat’s all highly commendable. Unfortunately, the second half isn’t compelling. I sat there bored and couldn’t wait for it to end. “Donnie Darko” (2001) had the same problem – promising set-up with clever ideas, but a tedious wrap-up. Meanwhile the twist that everyone gushes over is actually underwhelming and not very surprising, although it’s relatively interesting. \r\n\r\nMoreover, watching guys get radically beat up is only entertaining a couple times; after that it gets redundant. Speaking of which, how exactly does bare-knuckled fighting inspire or enlighten? Does it really help one’s life to have missing teeth, black eyes and other assorted injuries? Of course the movie doesn’t emphasize the long-lasting negative effects of regular brawling. Have you ever met a brawler, boxer or professional football player in his 50s with the perpetual aches & pains?\r\n\r\nCult flicks like “Pulp Fiction” (1994) deserve the praise and stand the test of time; this one disappoints mainly due to the curiously dull second half. But it's genius on the metaphorical level no doubt.\r\n\r\nThe film is overlong at 2 hours, 19 minutes, and was shot in Los Angeles.\r\n\r\nGRADE: B-",
//       "created_at": "2021-07-02T19:43:11.860Z",
//       "id": "60df6c4f9979d2005d419e08",
//       "updated_at": "2021-10-06T02:29:57.537Z",
//       "url": "https://www.themoviedb.org/review/60df6c4f9979d2005d419e08"
//     },
//     {
//       "author": "katch22",
//       "author_details": {
//         "name": "",
//         "username": "katch22",
//         "avatar_path": null,
//         "rating": 8
//       },
//       "content": "Madness unbounded.  Don't try to make sense of insanity, just ride a wild ride.",
//       "created_at": "2021-07-13T18:37:57.161Z",
//       "id": "60eddd855f622b005e51f938",
//       "updated_at": "2021-07-14T13:17:01.343Z",
//       "url": "https://www.themoviedb.org/review/60eddd855f622b005e51f938"
//     },
//     {
//       "author": "alksjalksj",
//       "author_details": {
//         "name": "",
//         "username": "alksjalksj",
//         "avatar_path": "/vYtiI5wiy8iX7BaLbanPCHaNPUs.jpg",
//         "rating": 10
//       },
//       "content": "The best movie i've seen, also my head hurts",
//       "created_at": "2022-12-11T06:20:22.180Z",
//       "id": "639576a62cefc200a2fd4f33",
//       "updated_at": "2022-12-13T20:53:10.226Z",
//       "url": "https://www.themoviedb.org/review/639576a62cefc200a2fd4f33"
//     }
//   ],
//   "total_pages": 1,
//   "total_results": 8
// }
