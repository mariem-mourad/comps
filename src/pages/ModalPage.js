import { useState } from "react";
import Modal from "../components/Model";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
           Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
     <div>
        <Button onClick={handleClick} primary> 
          Open Modal
        </Button>
        {showModal && modal}
        
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at leo euismod, tempus tortor nec, malesuada neque. Mauris sagittis nisi at libero lacinia, cursus aliquet dui porta. Aliquam ultrices rutrum elit, ac facilisis sem dignissim quis. Ut ut nisl auctor ipsum ornare dapibus. Nullam nec quam lectus. Maecenas risus nibh, semper eget est vitae, lobortis consectetur urna. Mauris vel arcu sapien. Aliquam erat volutpat. Proin a velit venenatis, pulvinar massa eu, aliquet dolor. Ut viverra sit amet urna ac ultricies. Maecenas commodo, dolor at tristique semper, risus risus congue neque, eget ultrices libero sapien et leo. Vivamus congue libero sit amet sapien rutrum, in cursus est consequat
        </p>

    </div>
    );
}

export default ModalPage;
