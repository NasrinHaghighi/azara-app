'use client'
import React,{useRef, useEffect} from 'react'
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

function AboutCo() {
    const main = useRef<HTMLElement | any>();

   
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box:any) => {
        gsap.to(box, {
          x: -150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );
    
  return (
    <div>
    <section className="section flex-center column">
      <h2>Basic ScrollTrigger with React</h2>
      <p>Scroll down to see the magic happen!!</p>
   
    </section>
    <div className="section flex-center column" ref={main}>
      <div className="box  ">box</div>
      <div className="box  ">box</div>
      <div className="box  ">box</div>
    </div>

    <section className="section">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum consectetur at, voluptatibus a delectus omnis? Fuga facere nostrum nemo consequuntur vel autem maiores, atque quia nihil magni nam voluptates recusandae deserunt beatae necessitatibus rerum quod cum quo omnis odit, debitis, commodi ducimus totam quis? Unde aliquam provident temporibus in cupiditate, ad neque suscipit saepe doloribus odio impedit dolorem fugiat a veritatis nam ipsam dolor recusandae, sint libero. Cum consequuntur sapiente, fugiat laudantium libero suscipit vero, iste qui ullam distinctio eaque ipsa animi provident nesciunt voluptate, ipsum quasi accusamus eius possimus sequi magnam asperiores! Facilis, tempora recusandae. Quae accusamus cupiditate amet tenetur. Enim voluptatem ab amet at fugiat maxime saepe obcaecati molestiae. Incidunt vitae minus quaerat! Iusto explicabo enim odio dolores soluta asperiores exercitationem modi nihil placeat, deserunt commodi, fugiat perferendis, obcaecati possimus? Quae, quo repellat, ex tempore vitae voluptate veniam corporis nihil, ipsam voluptatum reiciendis. Temporibus, est minima similique porro rem, earum cumque magnam obcaecati quos sit optio voluptatum molestiae inventore perspiciatis illo accusantium. Veritatis sint eius mollitia et placeat consequatur ut dolor quis odit quibusdam vero a neque, culpa molestias fugiat magnam sapiente dignissimos repudiandae harum ea excepturi. Nihil provident laborum voluptatem repellat quibusdam omnis repudiandae ea nulla commodi facilis, fuga perferendis rerum, labore sed, nesciunt ab! Quam quia dolores, ex id omnis quidem nam at impedit! Libero deserunt tempore minima ducimus fugit laudantium recusandae modi aperiam dignissimos sint vel veniam nobis, ab magni asperiores rerum! Officia est dolores illum, nisi dolorem sunt voluptatibus amet eum necessitatibus porro dignissimos sint nulla illo explicabo, asperiores molestias dolore maiores sequi! Voluptatem, atque. Neque ut magnam eaque minima dicta est, hic alias cumque? Quisquam iusto perspiciatis in quidem ipsum explicabo sit porro nam beatae, illo ipsa eveniet quis est ab accusamus expedita blanditiis fugit. Adipisci voluptatum illo tempore laudantium temporibus magnam, esse aspernatur voluptatibus alias, illum consectetur rem minima porro magni ut ad blanditiis fugiat, repellat ea quasi delectus animi dolore vitae modi! Tempora magnam magni expedita corporis odio accusamus, eius deserunt iusto nobis architecto praesentium placeat. Autem et sed suscipit deserunt veritatis nisi vitae dolores eius beatae? Optio et necessitatibus ullam vel asperiores. Voluptatem atque, esse consequuntur commodi, eos laudantium quasi id odit tempore voluptate soluta sed est odio a aut cumque necessitatibus illo distinctio libero maiores sequi laborum, voluptas nulla vero? Hic, ipsam? Iusto beatae voluptates maiores magnam harum libero quod culpa. Minima at inventore cumque exercitationem vel atque facere sequi dolores, voluptatem minus, tenetur necessitatibus itaque ullam veritatis voluptas. Tenetur alias accusantium, debitis dolore autem ipsum fugiat officiis delectus eius provident velit sed rerum laudantium ab, doloribus aut commodi in sequi eaque quis voluptate tempore iste! Quisquam fugit aperiam maxime rem expedita ut alias hic illo, cum amet sed voluptatem qui dicta ullam. Ullam eaque non soluta temporibus amet in atque laudantium? Id incidunt, quos animi dolorem libero molestias ullam pariatur atque quibusdam delectus at repellendus. Voluptas facilis cumque maiores sint quod soluta adipisci animi autem at, magnam neque, nemo voluptate vel aut a delectus exercitationem quibusdam. Numquam, voluptatibus.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem est nemo, at nisi mollitia veritatis perspiciatis assumenda, magnam ad fugiat dolore recusandae ipsam veniam quis perferendis accusamus ipsa reiciendis iusto maiores earum? Suscipit quibusdam quae vel reprehenderit illo, maxime tenetur! Tempora asperiores quaerat illum vitae eveniet quas nostrum alias voluptates qui ipsum, quo itaque voluptatem in est assumenda dolorum ut, vero ipsam repellendus, id quisquam. Deserunt quam, esse animi temporibus maiores nam iusto voluptatum architecto quos atque dolores totam, saepe tempora voluptatibus consequuntur, cum fuga ducimus. Earum ratione repellat voluptate illum optio minima! Eum quaerat officia numquam natus amet odio sunt praesentium itaque, commodi officiis consectetur hic voluptas rem deserunt, totam accusamus. Quas dolores natus voluptas sint nostrum aperiam saepe itaque sapiente molestias ipsam in aliquid dolorum distinctio quae nulla ut pariatur, dolor et similique soluta. Et, nobis debitis a doloribus, corporis odio rem voluptate, ratione maiores tempore obcaecati? Ad rerum modi id explicabo expedita alias harum possimus totam dolorem, saepe, suscipit beatae qui rem exercitationem deserunt laboriosam ipsa culpa quod? Dolorum voluptatem atque neque temporibus architecto in facere autem, placeat, eveniet perferendis magnam sint rerum harum debitis ex repellendus provident exercitationem sapiente odio, optio nostrum sed laborum explicabo soluta. Necessitatibus assumenda eligendi veritatis eveniet sunt saepe, veniam cupiditate ratione corporis nesciunt magni voluptate consequatur excepturi voluptatem non odit recusandae laborum quidem aliquam. Cum assumenda, natus distinctio nesciunt ad voluptate ducimus modi itaque harum. Hic necessitatibus eligendi repudiandae dolore! Nisi est ipsum magni? Vitae, alias nostrum! Obcaecati iure, nisi molestiae quas aperiam reprehenderit adipisci corrupti. Natus dignissimos blanditiis placeat, ex excepturi vel nulla tenetur et! Nihil laboriosam voluptas, eos blanditiis quibusdam esse, molestias vitae nemo temporibus optio eligendi ipsam ullam? Beatae officiis culpa dolorem illo ratione odio impedit quisquam quo consequuntur fugit velit reiciendis veritatis et necessitatibus fugiat excepturi sunt tempora, consequatur voluptatum quia iure nobis doloremque error. Officia adipisci tempore magni eveniet, quos quod? Sed eos, maiores fugiat voluptatibus quasi eaque rem excepturi odio qui veniam? Optio rerum id repudiandae perspiciatis voluptatem velit a quasi neque eius tenetur dolore distinctio laudantium, quos labore sint qui dolorum possimus? Sit id ea ut, nam corrupti molestias nostrum natus placeat. Ab dolore adipisci dolorum placeat exercitationem, perspiciatis ipsam maxime numquam culpa nisi facere? Quisquam consequuntur et ipsam odit perspiciatis sint dolorum ad quas, voluptates temporibus voluptas ut similique saepe aperiam minima vel inventore fugit cupiditate, vero animi. Error, facilis! Quod delectus ut cum suscipit porro asperiores, autem alias unde assumenda maxime! Unde ea labore voluptatibus dolorem voluptatum placeat iure facilis odit pariatur, accusantium voluptas atque fuga perspiciatis? Dolorem nihil sequi quaerat aliquam minus et ullam ipsam, reiciendis alias pariatur iste consequatur eligendi error recusandae repudiandae expedita quasi aut esse quod mollitia consequuntur. Cupiditate quia velit placeat tempora excepturi! Quibusdam impedit laborum, aspernatur dolorum ullam ut iste assumenda, pariatur quo, nam ipsum perspiciatis harum vitae molestiae? Quas expedita consequatur maxime vel, doloribus harum sed quasi ad laboriosam maiores quis perspiciatis veniam, nesciunt iusto commodi atque et alias eveniet aliquid qui! Nobis, blanditiis esse.
    </section>
  </div>
  )
}

export default AboutCo